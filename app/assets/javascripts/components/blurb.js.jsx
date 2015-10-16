var Blurb = React.createClass({
  getInitialState: function(){
    return{
      content: ""
    };
  },
  updateContent: function(event){
    this.setState({content: event.target.value});
  },
  render: function(){
    return (
      <div>
        <textarea value={this.state.content} onChange={this.updateContent}></textarea>
        <span>{3000 - this.state.content.length}</span>
      </div>
    );
  }
});