var Comment = React.createClass({
  getInitialState: function(){
    return { showSubComments: false };
  },
  onClick: function(){
    if (this.state.showSubComments) {
      this.setState({ showSubComments: false });
    }
    else {
      this.setState({ showSubComments: true });
    }
  },
  deleteComment: function(){
    this.props.deleteComment(this.props.id);
  },



  render: function(){
    var id = this.props.id;

    var subComments = this.props.subcomments;


    return (
      <div id="single-comment-body">
        <div className="row">
          {this.props.content}
        </div>
        <div className="row">
          <div className="five columns">&mdash; <em>{this.props.commenterName}, {this.props.commentTime} ago</em></div>
          <div className="two columns u-pull-right"><button onClick={this.onClick} type="button"> Reply </button></div>
        </div>

          {this.state.showSubComments ? <SubCommentList subcomments={subComments} id={this.props.id} user_id={this.props.user_id} /> : null }
      </div>
      )
  }
});


