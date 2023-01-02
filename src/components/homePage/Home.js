import React from "react";
import "./Home.css"
function Home() {
    let picNum = React.useRef(0)
    const [opacity, setOpacity] = React.useState(1)
   
    const [changeSwitch, setChangeSwitch] = React.useState(false)
    const [changeDirection, setChangeDirection] = React.useState(2)
    let imgRef = React.useRef()

    let pictureArray = [
        {picture:<img  ref={imgRef} src="https://i.kym-cdn.com/photos/images/original/001/385/315/4f7.jpg"/>, caption: "The Zuccnator6969"},
        {picture:<img ref={imgRef} src="https://i.kym-cdn.com/photos/images/original/001/892/146/665.jpg"/>, caption: "The Holy Zucc"},
        {picture:<img ref={imgRef} src="https://cdn.voicetube.com/assets/thumbnails/Ew9oewvyd0M.jpg"/>, caption: "The Zucc In His True Form"}
    ]

    
    
    function clickHandler() {
        setChangeDirection(1)
        setChangeSwitch(true)
        
    }

    function clickHandler2() {
        setChangeDirection(0)
        setChangeSwitch(true)
    }
    
    React.useEffect(() => {
        console.log(
            `changeSwitch: ${changeSwitch}
            changeDirection: ${changeDirection}
            picNum: ${picNum.current}
            opacity: ${opacity}`
        )
        function fade(){
            
            if(imgRef.current.style.opacity > 0.1){
                setOpacity(prevState => (prevState - 0.1).toFixed(2))
            console.log(opacity)
            imgRef.current.style.opacity = opacity 
            }else{
                setChangeSwitch(false)
            }
        }

        function appear(){
                setOpacity(prevState => (prevState - -0.1).toFixed(2))
            console.log(opacity)
            imgRef.current.style.opacity = opacity
        }

        if(changeSwitch){
        const interval = setInterval(() => {
            fade()
          }, 10)
        
          return () => clearInterval(interval)
        }else if(!changeSwitch && imgRef.current.style.opacity < 0.9){
            if(changeDirection === 1 && imgRef.current.style.opacity == 0){
                
                    if(picNum.current < 2){
                        picNum.current = picNum.current + 1
                        setChangeDirection(3)
                       
                    }else{
                        picNum.current = 0
                        setChangeDirection(3)
                    }
                
            }else if(changeDirection === 0 && imgRef.current.style.opacity == 0){
                if(picNum.current > 0){
                    picNum.current = picNum.current - 1
                    setChangeDirection(3)
                }else{
                    picNum.current = pictureArray.length - 1
                    setChangeDirection(3)
                }
            }
            const interval2 = setInterval(() => {
                appear()
              }, 10)
            
              return () => clearInterval(interval2)
        }
        

    },[picNum,opacity,changeSwitch, changeDirection, pictureArray.length])

    

    return (
      <div className="Home">
        <div className="picture-change-container">
            <button onClick={clickHandler2}>⇐</button>
        <div>
            
            {pictureArray[picNum.current].picture}
            <p>{pictureArray[picNum.current].caption}</p>
        </div>
        
        <button onClick={clickHandler}>⇒</button>
        </div>
      </div>
    );
  }
  
  export default Home;