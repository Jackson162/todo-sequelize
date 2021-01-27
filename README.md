todo-sequelize
===
todo-sequelize 是一個可以協助你紀錄代辦事項的清單<br> 

Features
============
-----2021/01/28-----
1. 使用者可瀏覽所有代辦事項
2. 使用者可新增代辦事項
3. 使用者可修改代辦事項
4. 使用者可刪除代辦事項
5. 登入及註冊系統
6. Google登入功能<br>




prerequisites
================

## global packages

1. Node.js: v10.15.0 
2. nodemon: v2.0.6
3. npm: v6.4.1

## local packages

可於專案的 `package.json` 中查閱 `dependencies` 部分。<br> 

## database related

1. MySQL: 8.0.23.0


installation and execution
=======

指令部分可參閱 `package.json` 中查閱 `scripts` 部分。<br> 

1. clone 這個專案，在終端機輸入:
```
git clone https://github.com/Jackson162/todo-sequelize.git
```
2.  進入專案根目錄，安裝本地套件 (local packages)，在終端機輸入: 
```
npm install
```
3. 在 MySQL Workbence 中用以下指令新增資料庫 todo_sequelize:
```
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;

```
4. 在終端機輸入指令來把 migration 檔同步到資料夾:
```
npx sequelize db:migrate
```

5. 在終端機輸入指令來新增種子資料(請先確認資料庫是空的):
```
npx sequelize db:seed:all
```
6. 啟動伺服器，執行專案:
```
npm run dev
```
7. 打開瀏覽器，搜尋:
```
http://localhost/3000
```
8. 使用假帳號登入:
```
email: 'root@example.com',
password: '12345678'

```

