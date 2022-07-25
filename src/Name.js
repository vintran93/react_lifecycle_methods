import React, { useState, useEffect } from 'react'

// class Name extends Component {

//     state = {
//         language: 'React'
//     }

//     componentDidMount(){
//         console.log('Component did mount')
//         setTimeout(() => {
//             this.setState({
//                 language: 'Python'
//             })
//         }, 2000)

//         // this.interval = setInterval(() => {
//         //     console.log('Making an API call')
//         // }, 2000)
//     }

//     changeLanguage = () => {
//         this.setState({
//             language: 'Ruby'
//         })
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         // returns true or false
//         // only renders if it is true
//         // debugger;
//         // should the component update? no => return false
//         // if they're equal, nothing changes so false
//         // should only re-render if it returns true
        
//         if (this.state.language === nextState.language){
//             return false
//         } else {
//             return true
//         }

//     }

//     // componentWillUnmount(){
//     //     clearInterval(this.interval)
//     // }

//     render() {
//         console.log('Render this is Name.js')
//         return (
//             <div>
//                 {this.state.language}
//                 <br/>
//                 <button onClick={this.changeLanguage}>Change Language</button>
//             </div>
//         )
//     }
// }
function Name() {

    const [name, setName] = useState('React')

    const changeLanguage = () => {
        let theName = (name === 'Ruby' ? 'Javascript' : 'Ruby')
        setName(theName)
    }

    useEffect(() => {
        console.log('The Effect')
        // setName('React')
    },[name])
    // Upon mount, will cause it to happen once only if empty array
    // to render upon change, put name; everytime name changes, run effect; kind of like shouldComponentUpdate


    // console.log('Render this is Name.js')
        return (
            <div>
                {name}
                <br/>
                <button onClick={changeLanguage}>Change Language</button>
            </div>
        )
    
}



export default Name;