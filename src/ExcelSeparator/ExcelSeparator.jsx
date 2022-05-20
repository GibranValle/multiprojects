import React, { PureComponent } from 'react'
import './Excel.css'

class ExcelSeparator extends PureComponent {
    constructor(props) {
        super(props)
        this.state={
            table: '',
            newTable: '',
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault()
        const rows=this.state.table.split('\n')
        const keys=rows[0].split('\t')
        console.log(keys)
        const elements=rows.map((row, i1) => {
            if (i1>0) return row.split('\t').map((cell, idx) => {
                return { [keys[idx]]: cell }
            })
        })
        const filtered=elements.filter(el => {
            if (el&&el.length>1) return el
        })
        console.log(filtered)
        const newTable=
            <table>
                <tbody>
                    <tr>
                        {keys.map(key => <th>{key}</th>)}
                    </tr>
                    {filtered.map(array => {
                        return (<tr>
                            {array.map(subarray => {
                                return (
                                    <td>{Object.values(subarray)[0]}</td>
                                )
                            })}
                        </tr>)
                    })}
                </tbody>
            </table>
        console.dir(newTable)
        this.setState({ newTable })
    }
    render() {
        return (
            <div className='component Excel'>
                <h1>Excel Table extractor</h1>
                <form action="" onSubmit={this.handleSubmit} className={'Excel-form'}>
                    <label htmlFor="table">Paste Excel formated table</label>
                    <textarea type="text" name="table" onChange={this.handleChange}
                        cols="30" rows="10"
                        value={this.state.table} id="table" />
                    <button>Check table</button>
                </form>
                {this.state.newTable}
            </div>
        )
    }
}

export default ExcelSeparator