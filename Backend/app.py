from flask import Flask, request, jsonify
from flask_cors import CORS
from SqlOpeartion import SQL  # Import the SQL class from your previous code

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from your React frontend



@app.route('/user_check', methods=['POST'])
def user_check():
    data = request.json  # Get JSON data from the request
    email = data.get('email')
    password = data.get('password')
    
    # Initialize the database connection and cursor
    db_instance = SQL()
    conn= db_instance.SqlConn()
    cursor = conn.cursor()

    # Query to check if the email and password exist in the users table
    query = "SELECT * FROM users WHERE email = %s AND password = %s"
    cursor.execute(query, (email, password))
    result = cursor.fetchone()  # Fetch one result
    
    cursor.close()  # Close the cursor
    conn.close()  # Close the connection

    # Check if a result was returned
    if result:
        return jsonify({'message': 'Login successful', 'status': 'success'}), 200
    else:
        return jsonify({'message': 'Invalid email or password', 'status': 'failure'}), 401

if __name__ == '__main__':
    app.run(debug=True)
