var SubCommentList = React.createClass({
  getDefaultProps: function(){
    return {
      subcomments: [],
      subcomment: [],
      comment: []
    };
  },

  getInitialState: function(){
    return {
      subcomments: this.props.subcomments,
      subcomment: ''
    }
  },

  createComment: function(subcomment){
    this.setState({
      subcomment: ''
    }),
    $.ajax({
      url: '/subcomments',
      dataType: 'json',
      type: 'post',
      data: {subcomment: {content: subcomment, comment_id: this.props.id}},
      success: function(newsubComment) {
        var subcomments = this.state.subcomments
        subcomments.push(newsubComment)
        this.setState({subcomments: subcomments});
      }.bind(this)
    });
  },

  deleteComment: function(id){
    $.ajax({
      url: '/subcomments/' + id,
      dataType: 'json',
      type: 'delete',
      data: {subcomment: {id: id}},
      success: function(deletedsubComment) {
        var subcomments = this.state.subcomments;
        var index;
        var updatedsubComments = subcomments.map(function(subcomment){
          if (subcomment.id === deletedsubComment.id){
            index = subcomments.indexOf(subcomment)
          }
        });
        subcomments.splice(index, 1);
        return this.setState({
          subcomments: subcomments
        });
      }.bind(this)
    });
  },
  render: function(){

    var self = this;
    var subcomments = this.state.subcomments;
    var currentUser = this.props.currentUser;

    var subCommentList = subcomments.map(function(subcomment){
      return <SubComment content={subcomment.content} id={subcomment.id} deleteComment={self.deleteComment} currentUser={currentUser} subCommentAuthor={subcomment.user_id} commentTime={subcomment.timestamp} commenter={subcomment.commenter}  />
    });
    return (
      <div>
        <div>
          {subCommentList}
          <SubCommentInput className="subcomment-submit" onSubmit={this.createComment} />
        </div>

      </div>
      );
  }
})