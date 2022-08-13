# React code test
Code test for understanding react component's re-rendering strategies.
# User dashboard
This app aims to mimic a real world dashboard built using react components. <br>
Dashboard contains multiple widgets and each widget receives data as props by the parent component.
![Screenshot](./public/user_dashboard.PNG)
## Run the app
```
1. npm install
2. npm start
```
Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
## Requirements
All the widgets are independent and can be updated by selectors at the top.<br>
However, the current implementation is causing un-necessary re-renders of widgets.<br><br>
For this exercise, candidate should focus ONLY on Dashboard and Widgets components. <br> 
Make sure widgets only re-render as per below scenarios 
Scenario | Weather | User | Counter 
-------- | ------- | ---- | ------ 
Click "UPDATE WEATHER" | :heavy_check_mark: | :x: | :x:
For same user, Click "FETCH USER" | :x: | :x: | :x:
Change user in dropdown & click "FETCH USER" | :x: | :heavy_check_mark: | :x:
For same user, Click "UPDATE DASHBOARD" | :heavy_check_mark: | :x: | :x:
Change user in dropdown and click "UPDATE DASHBOARD" | :heavy_check_mark: | :heavy_check_mark: | :x:
Click "+" button inside Counter | :x: | :x: | ✔️