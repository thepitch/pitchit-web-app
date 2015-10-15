var SubCommentInput = React.createClass({
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
      <div>
        <div className="row"><textarea className="new-comment-text-area" value={this.state.content} onChange={this.updateContent}></textarea></div>

        <div className="row subcomment-submit">                <span>{1500 - this.state.content.length} characters left &nbsp;&nbsp;</span>
        <button onClick={this.handleSubmit} type="button"
                disabled={this.state.content.length === 0 || (1500 - this.state.content.length) < 0} > Add Subcomment </button></div>
      </div>
    );
  }
});