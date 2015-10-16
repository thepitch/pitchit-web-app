var SubComment = React.createClass({
  deleteComment: function(){
    this.props.deleteComment(this.props.id);
  },

  render: function(){
    return (
      <div id="single-comment-body">
      {this.props.content}

      <div className="row">
          <div className="five columns commenter">&mdash; <em>{this.props.subcommenterName}, {this.props.subcommentTime}</em></div>
        </div>
      </div>
      )
  }
});
