import React, {Component} from 'react';

class ABInput extends Component{

  constructor(props){
    super(props)
    this.state = {
      _input:''
    }
    this.props = {
      color:'#ff33ff'
    }
  }

  onChange(e){
    this.setState({
      _input:e.target.value
    })
  }

  render(){
    return(
      <div>
        <div className="ui massive fluid transparent input">
          <input type="text" placeholder="Input text..."
            onChange={this.onChange.bind(this)}>
          </input>
        </div>
        <h2 className="ui dividing header">Output</h2>
        <p className='aurebesh-output' style={ {color: this.props.color } }>
          { this.state._input }
        </p>
      </div>
      )
  }
}

export default ABInput;
