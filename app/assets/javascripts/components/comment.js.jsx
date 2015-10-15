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

  deleteButton: function(){
    if (this.props.currentUser == this.props.commentAuthor){
      return <button onClick={this.deleteComment} type="button" >Delete</button>
    }
  },



  render: function(){
    var currentUser = this.props.currentUser;
    var subcomment_commenters = this.props.subcomment_commenters;
    var id = this.props.id;
    var subcomment_timestamps = this.props.subcomment_timestamps;

    var subComments = this.props.subcomments.filter(function(subcomment){
      return (subcomment.comment_id == id)
    });

    subComments.map(function(subcomment, index){
      subcomment_commenters.map(function(subcommenters){
        subcommenters.map(function(commenter){

          if (subcomment.user_id == commenter.id) {
            return subcomment.commenter = commenter.first_name + " " + commenter.last_name
          }
          
        })

      })
      console.log(subcomment.timestamp)
      
    })

    return (
      <div id="single-comment-body">
        <div className="row">
          {this.props.content}
        </div>  
        <div className="row">
          <div className="five columns">&mdash; <em>{this.props.commenterName}, {this.props.commentTime} ago</em></div>
          <div className="two columns u-pull-right"><button onClick={this.onClick} type="button"> Reply </button></div>
          <div className="two columns u-pull-right">{this.deleteButton()}</div>
        </div>

          {this.state.showSubComments ? <SubCommentList subcomments={subComments} id={this.props.id} currentUser={currentUser} /> : null }
      </div>
      )
  }
});


      // <div>
      //   <div className="row" id="single-comment-body">
      //     <div className="twelve columns">{this.props.content}</div>
      //   </div>

      //   <div className="twelve columns">{this.deleteButton()}</div>
      // </div>
