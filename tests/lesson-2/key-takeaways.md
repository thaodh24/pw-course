
# LESSON 2
## Version Control System
VCS (Version Control System)
 - Local - máy cá nhân
 - Centralized - máy chủ tập trung
 - Distributed - nhiều máy khác nhau

## Git
- Tác dụng: quản lí nhiều phiên vản và làm việc giữa nhiều người với nhau

### Git & GitHub

| Git | GitHub |
|----------|----------|
| Là một phần mềm    | Là một dịch vụ web  | 
| Cài trên máy của bạn    | Host trên website  | 
| Là một commandline tool    | Là công cụ có giao diện  | 
| Là công cụ quản lý phiên bản, đưa file vào Git repository    | Là nơi để upload Git repository lên  | 
| Có các tính năng của VSC    | Có các tính năng của VSC và một số tính năng khác  | 

### Git - three states

- **Working Directory**: các file mới hoặc file có thay đổi
- **Staging Area**: các file đưa vào vùng chuẩn bị commit
- **Repository**: các commits

### Git - key takeaways 
#### Common command

| Description | Command | Note |
|----------|----------|----------|
| Khởi tạo thư mục quản lý bởi git    | `git init` |         |
| Config cho 1 repo cụ thể    | `git config user.name "yourname"`  |         | 
| Config cho tất cả    | `git config --global user.name "yourname"`  |          |
| Thêm file chỉ định vào Staging  | `git add <path to file>`  |          |
| Thêm tất cả file vào staging  | `git add .` |         |
| Check status   | `git status` | Files **xanh** = **Staging Area**, Files **đỏ** = **Working Directory**        |
| Commit kèm mess  | `git commit -m "message"` |         |
| Check commit history   | `git log` |         |

#### Git convention
**Commit message** 
```
<type>: <short_description>
```
**type**: 
- chore: chính tả, xoá file k dùng tới ,....
- feat: add feature lớn, test cases mới,...
- fix: fix bug

**short description**: 50 chars k dấu, Anh hay Việt đều được

## Javascript basic
### "Hello World"

### Variable
```
var firstName = "Playwright";
let lastName = "Automation class";
```
- `var` khai báo lại được, `let` thì không
```
var firstName = "Bella";
var firstName = "Trang"; //OK

let firstName = "Bella";
let firstName = "Trang"; //error
```

- `var`: global scoped & `let`: block scoped {...}
- `const` để khai báo các giá trị không thể thay đổi, dùng khi biến không gán lại được
- Thường dùng **const** và **let**, không dùng **var**
```
const name = "Bella";
console.log (name);
name = "Trang"; //error
```

### Data types
| Type | Value |
|----------|----------|
|  String   | `"Bella"`, `"Playwright"`    |
|  Number   |   `100`, `0`, `10.5`, `-10.5`  |
|  Boolean   |   `true`, `false`  |
|   Bigint  |     |
|   Undefined  |     |
|   Null  |     |
|   Symbol  |     |
|   Object  |     |

```
const name = "Bella";
const isLearningPlaywright = true;
const price = 200;
```


### Comparison operator
- So sánh hơn kém: `>`, `<`
- So sánh bằng: `==`, `===`, `!=`, `!==`, `>=`, `<=`
- Trả về kết quả Boolean

```
ex:
const a = 10;
const b = "10";
const c = 11;

console.log (a === b); //false - so sánh value & data type
console.log (a == b); //true - so sánh value only
console.log (a == c); //false
```

### Unary operator
- `i++` = `i+1`
- `i--` = `i-1`

```
ex:
let i = 10
i = i + 1 //i=11
console.log (i++) //i=12
```

### Arithmetic operator
- Tính toán giá trị biểu thức
- Các phép tính: `+`, `-`, `*`, `/`


### Conditional
- Structure: `if (<điều kiện>) {//code}`
- Example:
```
const tuoiBa = 40;
const tuoiMe = 38;

if (tuoiBa > tuoiMe){
    console.log ("Ba lớn hơn Mẹ")
}
```


### Loops
- Structure: `for (<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {//code}`
- Example:
```
for (let i = 1; i <= 10; i++){
    console.log ("Gía trị của i là: ", i);
}
```

## VSCode
- Format code: `Option + Shift + F`