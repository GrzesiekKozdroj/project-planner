import React, { Component } from 'react'

const SignIn = ()=> {
        const handleSubit= (e)=>{ console.log(e) }
        const handleChange = (e)=>{ console.log(e) }
    //render() {
        return (
            <div className='container'>
                <form onSubmit={handleSubit} className="white">
                    <h5 className='grey-text text-darken-4'>
                        title
                    </h5>
                    <div className='imput-field'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={handleChange} type='email' id='email'></input>
                    </div>
                    <div className='imput-field'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={handleChange} type='password' id='password'></input>
                    </div>
                    <div className='imput-field'>
                        <button className='button green darken-7'>login</button>
                    </div>
                </form>

            </div>
        )
    //}

}
export default SignIn