import {useState} from "react";
import Backdrop from "../../UI/Backdrop";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const ModalSwitcher = (props) => {
    const[currentModal, setCurrentModal] = useState('modalSignIn')

    const openSignUpModal = () => {
        setCurrentModal('modalSignUp')
    }

    const openSignInModal = () => {
        setCurrentModal('modalSignIn')
    }

    return <Backdrop close={props.onClose}>
        {currentModal === 'modalSignIn' && (<SignInModal openSignUpModal = {openSignUpModal} onClose = {props.onClose}/>)}
        {currentModal === 'modalSignUp' && (<SignUpModal openSignInModal = {openSignInModal} onClose = {props.onClose}/>)}
    </Backdrop>
}

export default ModalSwitcher