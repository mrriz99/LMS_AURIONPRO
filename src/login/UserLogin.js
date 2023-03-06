import Container from '../templates/Container';

const UserLogin=()=>{
    const submitHandler=(events)=>{
        events.preventDefault();
    }
    return(
        <Container>
         <form onSubmit={submitHandler} className="form_login2">
                <img className="ad_image" src={require('./admin.jpg')} />
            <div className="div1">
                <label>Admin ID</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="text"></input>
            </div>
            <h6>Forgot Password</h6>
            <button className="butt3">Login</button>
            </form>
        </Container>
    )
}
export default UserLogin