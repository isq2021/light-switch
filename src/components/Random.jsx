import React,{Component} from 'react';
import '../components/Random.css'


export default class Random extends Component {
    constructor(){
        super()
        this.state = ({ actualPage:0, options:[0,1,3,4]})
    
      }
      changePage(selectedPage){
          this.setState({actualPage:selectedPage})
      }

  render() {
      const activePage = this.state.actualPage

      let pageInformation;

      switch(activePage){
        case 0:
        pageInformation = "React · Declarative. React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state, then compose"
        break
        case 1:
        pageInformation = "What It's Used For: VueJS is primarily used to build web interfaces and one-page applications. In saying that, it can also be applied to both desktop and mobile app development thanks to the HTML extensions and JS base working in tandem with an Electron framework "
        break
        default:
        pageInformation = "What is Angular?link · A component-based framework for building scalable web applications · A collection of well-integrated libraries that cover a wide variety of ."
      }

    return (
    <>
        <div>
            <div className='container1'>
                <button onClick={() => this.changePage(0)} >Option 0</button>
                <button onClick={() => this.changePage(1)}>Option 1</button>
                <button onClick={() => this.changePage(2)}>Option 2</button>
            
          
                
            </div>
            <div className='container1'>
                {pageInformation}

            </div>
            

            
        
        </div>;
    
    </>
    )
    
  }
}
