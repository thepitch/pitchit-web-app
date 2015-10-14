var SubComment = React.createClass({
  deleteComment: function(){
    this.props.deleteComment(this.props.id);
  },
  deleteButton: function(){
    if (this.props.currentUser == this.props.subCommentAuthor){
      return <button onClick={this.deleteComment} type="button" >Delete Subcomment</button>
    }
  },
  render: function(){
    return (
      <div id="single-comment-body">
      {this.props.content}
      <div className="row">
          <div className="five columns">&mdash; <em>{this.props.commenter}, {this.props.commentTime} ago</em></div>
          <div className="two columns u-pull-right">{this.deleteButton()}</div>
        </div>
      </div>
      )
  }
});
