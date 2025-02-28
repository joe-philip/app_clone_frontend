import './style.css'

function FormComponent() {
    return <form className="token-form">
        <div className='title'>App Clone</div>
        <input type="text" placeholder='Token' />
        <input type="submit" value="Submit Token" />
    </form>
}

export default FormComponent;