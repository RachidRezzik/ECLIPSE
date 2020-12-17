import React, {useEffect, useRef} from 'react'
//Images
import x_mark from '../images/white_x_mark.png'

export default function ImageModal(props) {
    const handleModalClose = () => {
        props.handleModalClick()
    }

    const node = useRef()
    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && props.modalOpen) {
                props.handleModalClick()
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

    return (
        <div className={props.modalOpen ? "image_modal active" : "image_modal"}>
            <img ref={node} id="expanded_image" src={props.featuredImage} alt="" />
            <img className={props.modalOpen ? "exit_modal active" : "exit_modal"} src={x_mark} onClick={handleModalClose} alt=""/>
        </div>
    )
}
