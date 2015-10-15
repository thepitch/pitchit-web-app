var CommentInput = React.createClass({
  getInitialState: function(){
    return{
      content: ""
    };
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ""});
  },
  updateContent: function(event){
    this.setState({content: event.target.value});
  },
  render: function(){
    return (
      <div className="row">
      
        <div className="twelve columns">
          <textarea name="" id="new-comment-body" type="text" placeholder="Enter new comment..." value={this.state.content} onChange={this.updateContent}></textarea>
        </div>

        <div id="react-submit-button">
          <div className="twelve columns">
            <span className="add-comment-button">{1500 - this.state.content.length} characters left &nbsp;&nbsp;</span>
            <button className="new-comment-submit" onClick={this.handleSubmit} type="button" disabled={this.state.content.length === 0 || (1500 - this.state.content.length) < 0} > Add Comment </button>
          </div>
        </div>

      </div>
      );
  }
});
