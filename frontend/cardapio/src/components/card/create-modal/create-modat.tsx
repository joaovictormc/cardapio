interface InputProps {
    label:string,
    value: string | number,
    updateValue(value: string | number): void
}


const Input = ({label, value, updateValue} : InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    )
}

export function CreateModal() {
    return(
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container" action="">
                    <Input label="title" value={} updateValue={}/>
                    <Input label="price" value={} updateValue={}/>
                    <Input label="image" value={} updateValue={}/>
                </form>
            </div>
        </div>
    )
}