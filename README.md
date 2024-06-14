# Notes Application

This is a simple notes management application with create, update, delete, and localization features.

## Backend Setup

The backend is implemented using Java and Spring Boot.

## Frontend Setup

The frontend is implemented using React.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/AndreyKagaml/notes-app-frontend
    cd notes-app-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```


### Localization

The application supports English and Spanish. 

### Styling

Custom styles are implemented using SCSS.

## Docker

### Build the Docker image:

```bash
docker build -t notes-frontend .
```


### Run the Docker container:
```bash
docker run -p 3000:3000 -d notes-frontend
```

The application will be accessible at http://localhost:3000

