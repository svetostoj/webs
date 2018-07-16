import React from 'react';

const Header = function EventNewHeader() {
    return (
      <h1>New Event</h1>
    );
}

class NewEventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
    //Bind methods for inputs here
    this.handleChange = this.handleChange.bind(this);
  }
  //Handle info functions
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    
    const url = 'https://webs-backend-kpbyniydyc.now.sh/events/new'
    const data = { title: event.target.title.value }

    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  render(){
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.handleChange(e)}}>

        <input placeholder="Title" type="text" name="title" />

        <select name="workshop">
          <option value="memes101">Memes 101</option>
          <option value="html_css">HTML/CSS</option>
          <option value="javascript">Javascript</option>
        </select>

        <select name="facilitator">
          <option value="teacher1">Teacher 1</option>
          <option value="teacher2">Teacher 2</option>
          <option value="teacher3">Teacher 3</option>
        </select>

          <button name="addFacilitator">Add Another Facilitator</button>
          <button name="createShortCourse">Add New Short Course</button>

          <input type="checkbox" name="onsite" value="onsiteCourse" /> Onsite

        <select name="organisation">
          <option value="coderAcademy">Coder Academy</option>
          <option value="redhill">Redhill</option>
        </select>

        <select name="location">
          <option value="melbourne">Melbourne</option>
          <option value="Sydney">Sydney</option>
        </select>

        <input placeholder="Notes" type="text" name="notes" />

        <div>
          Start: <input type="datetime-local"/>
        </div>

        <div>
          End: <input type="datetime-local"/>
        </div>

        <button name="addDate">Add Date</button>

        <button type="submit">Submit</button>
        
      </form>
    )
  }
}

export { Header, NewEventForm }


// var url = 'https://example.com/profile';
// var data = {username: 'example'};

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers:{
//     'Content-Type': 'application/json'
//   }
// }).then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));