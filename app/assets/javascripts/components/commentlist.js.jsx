var CommentList = React.createClass({
  getDefaultProps: function(){
    return {
      pitchcomments: [],

    };
  },
  getInitialState: function(){
    return {
      pitchcomments: this.props.pitchcomments,
      user: this.props.user_id,
      comment: ''
    }
  },

  createComment: function(comment){
    this.setState({
      comment: ''
    }),
    $.ajax({
      url: 'http://localhost:3000/comments',
      dataType: 'json',
      type: 'post',
      data: {comment: {content: comment, pitch_id: this.props.pitch, user_id: this.props.user_id }},
      crossDomain: true,
      xhrFields: {
      withCredentials: true
    },

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
    var user = this.props.user_id;
    var commentList = pitchcomments.map(function(comment){


      return <Comment content={comment.content}
      id={comment.id}
      deleteComment={self.deleteComment}
      subcomments={comment.subcomments}
      commentAuthor={comment.user_id}
      commenterName={comment.author}
      commentTime={comment.created_at}
      user_id={user} />

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
