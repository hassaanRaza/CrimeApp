import React, { Component } from 'react';
//03402022276 - sarfaraz ahmed khan
class Crime extends Component {
    constructor(props) {
        super(props)
        //console.log(props.category)
        this.state = {
            categoryFromstate: [],
            forcesFromstate: [],
            selectedCrimeData: [],
            // selectedCat: undefined,
            // selectedForce: undefined
        }
        this.getSelectedCat = this.getSelectedCat.bind(this);
        this.getSelectedForce = this.getSelectedForce.bind(this);
        this.getData = this.getData.bind(this);

        // this.setState({
        //     selectedCrimeData: this.getData()
        // })
    }



    getSelectedCat(e) {
        //console.log(e.target.value);
        this.setState({
            selectedCat: e.target.value
        })
    }
    getSelectedForce(e) {
        //console.log(e.target.value);
        this.setState({
            selectedForce: e.target.value
        })
    }
    getData() {
        const { selectedCat, selectedForce } = this.state;
        this.props.crimes(selectedCat, selectedForce)
            .then(res => {
                //console.log(res);
                this.setState({
                    selectedCrimeData: res
                })
            })
            .catch(err => {
                console.log(err, "No Internet");
            })
    }
    componentDidMount() {
        this.props.category()
            .then(res => {
                this.setState({
                    categoryFromstate: res
                })
            })
            .catch(err => {
                console.log(err, "No Internet");
            })
        this.props.forces()
            .then(res => {
                this.setState({
                    forcesFromstate: res
                })
            })
            .catch(err => {
                console.log(err, "No Internet");
            })
    }
    render() {
        const { categoryFromstate, forcesFromstate, selectedCrimeData } = this.state;
        return (
            <div className="container">
                <div className="row App">
                    <div className="col-md-12">
                        <h2>Crime App</h2>
                    </div>
                </div>
                <div className="row App">
                    <div className="col-md-5">
                        <select onChange={this.getSelectedCat} className="form-control">
                        <option value={undefined} key={-1}>Select category</option>
                            {
                                categoryFromstate.map((elem, index) => {
                                    return <option value={elem.url} key={index}>{elem.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-5">
                        <select onChange={this.getSelectedForce} className="form-control">
                        <option value={undefined} key={-1}>Select force</option>
                            {
                                forcesFromstate.map((elem, index) => {
                                    return <option value={elem.id} key={index}>{elem.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-info" onClick={this.getData}>Search</button>
                    </div>
                </div>
                <div className="row App">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>Category</td>
                                    <td>Month</td>
                                    <td>Outcome</td>
                                </tr>
                            </thead>
                            {
                                selectedCrimeData.length > 0 &&
                                <tbody>
                                    {
                                        selectedCrimeData.map((elem, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{elem.category}</td>
                                                    <td>{elem.outcome_status.date}</td>
                                                    <td>{elem.outcome_status.category}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            }
                            {
                                selectedCrimeData.length === 0 &&
                                <tbody>
                                    <tr>
                                        <td colSpan="3">No records found!</td>
                                    </tr>
                                </tbody>
                            }
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Crime;

