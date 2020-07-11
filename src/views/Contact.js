import React from 'react';
import NewsLogo from '../img/react.png';

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        pekerjaan: '',
        alamat: '',
        makanan: [],
        tanggungan: 0,
        checkbox: false
      }
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onPick = this.onPick.bind(this);
      this.onCheck = this.onCheck.bind(this);
  
  
    }
  
    onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      alert(`Namaku adalah ${this.state.name}, pekerjaanku sebagai ${this.state.pekerjaan}`);
  
    }
  
    onChange(event) {
      const { name, value } = event.target;
      this.setState({ [name]: value })
    }
  
    onCheck(event) {
      const { name } = event.target;
      this.setState(prevState => ({ [name]: !prevState[name] }))
    }
  
    onPick(event) {
      let makanan = [...this.state.makanan];
      let idx = makanan.findIndex(elemen => event.target.value === elemen);
      if (idx > 0) {
        makanan = [...makanan.slice(0, idx), ...makanan.slice(idx + 1, makanan.length)]
      } else if (idx === 0) {
        makanan = [...makanan.slice(idx + 1, makanan.length)]
      } else {
        makanan.push(event.target.value)
      }
      this.setState({ makanan });
    }
  
    render() {
      const { name, pekerjaan, alamat, makanan, tanggungan, checkbox } = this.state;
  
        return (
        <form onSubmit={this.onSubmit}>
            <h1>Form Biodata</h1>
            <label>
                Name :
                <input name="name" type="text" value={name} onChange={this.onChange} />
            </label>
            <br />
            <label>
                Pekerjaan :
                <input name="pekerjaan" type="text" value={pekerjaan} onChange={this.onChange} />
            </label>
            <br />
            <label>
            alamat :
                <textarea name="alamat" value={alamat} onChange={this.onChange} />
            </label>
            <br />
            <label>
                Makanan :
                <select multiple value={makanan} onChange={this.onPick}>
                <option value="pizza">Pizza</option>
                <option value="burger">Burger</option>
                <option value="cilok">Cilok</option>
                </select>
            </label>
            <br />
            <label>
            Tanggungan :
                <input name="tanggungan" type="number" value={tanggungan} onChange={this.onChange} />
            </label>
            <br />
            <label>
            Apakah anda mau ?
                <input name="checkbox" type="checkbox" value={checkbox} checked={checkbox} onChange={this.onCheck} /> 
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
        
      );
    }
  }

  export default News;