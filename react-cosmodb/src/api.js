const baseAPI = '/api';

const petService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/pets`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(pet) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/pet`, {
        method: 'PUT',
        body: JSON.stringify(pet),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(pet) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/pet`, {
        method: 'POST',
        body: JSON.stringify(pet),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(pet) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/pet/${pet.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default petService;