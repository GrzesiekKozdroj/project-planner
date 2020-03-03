import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div  className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>
                        Project Title -{id}
                    </span>
                    <p>Lorem ipsum bla ble guu bo</p>
                    <div className='card-action grey lighten-3 grey-text'>
                        <div>Posted by: </div>
                        <div>20.20.20</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails