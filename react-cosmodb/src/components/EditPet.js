import React from 'react';

const EditPet = props => {
  if (props.selectedPet) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>id: </label>
            {props.addingPet
              ? <input
                  type="number"
                  name="id"
                  placeholder="id"
                  value={props.selectedPet.id}
                  onChange={props.onChange}
                />
              : <label className="value">
                  {props.selectedPet.id}
                </label>}
          </div>
          <div>
            <label>name: </label>
            <input
              name="name"
              value={props.selectedPet.name}
              placeholder="name"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>description: </label>
            <input
              name="description"
              value={props.selectedPet.description}
              placeholder="description"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>price: </label>
            <input
              name="price"
              value={props.selectedPet.price}
              placeholder="price"
              onChange={props.onChange}
            />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditPet;