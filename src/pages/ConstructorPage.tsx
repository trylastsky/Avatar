import IconButton from "../components/IconButton/IconButton";
import save from "../assets/icons/svg/save.svg";
import "./ConstructorPage.css"

const ConstructorPage:React.FC = () => {
 

  return (
    <>
        <div className='container'>
            <div className="constuctor-page">
                <div className="avatar-options">
                    
                </div>
                <div className="avatar-view">
                    <div className="ui-bar">
                       <h2>Персонаж</h2>
                       <IconButton icon={save} onClick={() => console.log("saved")}/>
                      
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default ConstructorPage;
