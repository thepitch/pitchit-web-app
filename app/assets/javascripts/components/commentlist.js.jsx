var CommentList = React.createClass({
  getDefaultProps: function(){
    return {
      pitchcomments: [],
      subcomments: [],
      commenters: [],
      timestamps: [],
      pitch: [],
      currentUser: [],
      subcomment_commenters: [],
      subcomment_timestamps: []
    };
  },
  getInitialState: function(){
    return {
      pitchcomments: this.props.pitchcomments,
      commenters: this.props.commenters,
      timestamps: this.props.timestamps,
      subcomments: this.props.subcomments,
      currentUser: this.props.current_user,
      subcomment_commenters: this.props.subcomment_commenters,
      subcomment_timestamps: this.props.subcomment_timestamps,
      comment: ''
    }
  },

  createComment: function(comment){
    this.setState({
      comment: ''
    }),
    $.ajax({
      url: '/comments',
      dataType: 'json',
      type: 'post',
      data: {comment: {content: comment, pitch_id: this.props.pitch}},
      success: function(newComment) {
        var pitchcomments = this.state.pitchcomments
        var currentUser = this.state.currentUser
        pitchcomments.push(newComment)
        this.setState({pitchcomments: pitchcomments});
      }.bind(this)
    });
  },

  deleteComment: function(id){
    $.ajax({
      url: '/comments/' + id,
      dataType: 'json',
      type: 'delete',
      data: {comment: {id: id}},
      success: function(deletedComment) {
        var pitchcomments = this.state.pitchcomments;
        var index;
        var updatedComments = pitchcomments.map(function(comment){
          if (comment.id === deletedComment.id){
            index = pitchcomments.indexOf(comment)
          }
        });
        pitchcomments.splice(index, 1);
        return this.setState({
          pitchcomments: pitchcomments
        });
      }.bind(this)
    });
  },
  render: function(){
    var self = this;
    var pitchcomments = this.state.pitchcomments;
    var subcomments = this.props.subcomments;
    var currentUser = this.state.currentUser;
    var commenters = this.props.commenters;
    var timestamps = this.props.timestamps;
    var subcomment_commenters = this.props.subcomment_commenters;
    var subcomment_timestamps = this.props.subcomment_timestamps;

    subcomments.map(function(subcomment, index){
      subcomment.timestamp = subcomment_timestamps[index]
    });
      console.log(subcomment_timestamps)

    var commentList = pitchcomments.map(function(comment, index){
      var commentsubs = subcomments.filter(function(subcomments){
          return (subcomments.comment_id == comment.id)
      });


      var commenter = commenters.find(function(commenter){
        return (commenter.id === comment.user_id)
      });
      var timestamp = timestamps[index];


      return <Comment content={comment.content} 
      id={comment.id} 
      deleteComment={self.deleteComment} 
      subcomments={commentsubs} 
      subcomment_commenters={subcomment_commenters}
      commentAuthor={comment.user_id} 
      commenterName={commenter.first_name + " " + commenter.last_name} 
      currentUser={currentUser} 
      commentTime={timestamp}/>

    });

    return (
      <div>
        <div id="comment-list-container">{commentList}</div>
        <CommentInput className="comment-submit" onSubmit={this.createComment} />
      </div>
    );
  }
});


//I added commentAuthor and currentUser as props accessed from the show.html.erb page.
