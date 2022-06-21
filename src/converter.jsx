import React, { useState } from 'react'

function Converter() {
  let [color, setColor] = useState();
  let [value, setValue] = useState();
  let [rgb, setRgb] = useState();
  function change(e) {
    setValue(e.target.value);
    let res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.target.value);
    let rgb = res ? `rgb(${parseInt(res[1], 16)}, ${parseInt(res[2], 16)}, ${parseInt(res[3], 16)})` : null;
    if (rgb !== null) {
      setColor(e.target.value);
      setRgb(rgb)
    } else if (e.target.value.length >= 7) {
      setColor('#ff0000');
      setRgb('Ошибка')
    }
  }

  return (
    <div className="converter" style={{ backgroundColor: color }}>
      <form>
        <input value={value} onChange={change} placeholder="Введите hex"/>
        <label htmlFor="rgb">{rgb}</label>

      </form>
    </div>
  )
}

export default Converter
