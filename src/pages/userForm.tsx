import TextField from "@/components/textInput"
import Button from "@/components/button"

export default () => {
  return (
    <>
      <TextField 
        label="Primer nombre" 
        placeholer="Satoshi"
        setValue={()=>{}}
      />
      <TextField 
        label="Segundo nombre" 
        setValue={()=>{}}
      />
      <TextField 
        label="Primer Apellido"
        placeholer="Nakamoto"
        setValue={()=>{}}
      />
       <TextField 
        label="Segundo Apellido" 
        placeholer=""
        setValue={()=>{}}
      />
      <div className="m-8">
        <Button
          text="Guardar"
          onClick={console.log}
        />
      </div>
    </>
  )
}
