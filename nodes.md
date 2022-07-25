React Lifecyle Methods - 

Stages or phases of a component
Do NOT use arrow functions to write methods

Pre-Mount 
    1. constructor() - initializes state

Mounting
    2. getDerivedStateFromProps (props, state) (not used often)
        Gets called right before render method
    3. render()
    4. componentDidMount() - gets called after it mounts a component and after the initial render
        ex: this.props.fetchDoctors()

Updating
    5. shouldComponentUpdate(nextProps, nextState)

Unmounting
    6. componentWillMount()
        This method is called when a component is being removed from the DOM
            Classic example: starting a timer and clean it up   

projects.wojtekmaj.pl/react-lifecycle-methods-diagram/