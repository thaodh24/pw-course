# LESSON 3

## Git
### Undo actions
| Description | Command | Note |
|:----------|:----------|:----------|
| Hiển thị lịch sử commit | `git log` |    |
| Thay đổi commit message - Cách 1 | `git commit --amend -m "message"` | thay đổi message của commit gần nhất, message mới nhất hiện lên sẽ là **"message"** |
| Thay đổi commit message - Cách 2 |  `git commit --amend` | 1. Gõ `i` -> vào chế độ insert<br>2.Gõ `esc` -> thoát insert<br>3. Gõ `:wq` -> write and quit|
| Đưa file từ vùng Staging Area về vùng Working Directory | `git restore --staged <file>` |      |
| Đưa commit từ vùng Repository về Working Directory | `git reset HEAD~1` |  số `1` thể hiện lượng commit sẽ được thực hiện theo lệnh |

### Branching model
| Description | Command | Note |
|:----------|:----------|:----------|
| Tạo ra nhánh <ten_branch> nhưng không di chuyển sang nhánh đó | `git branch <ten_branch>` |    |
| Di chuyển sang nhánh <ten_branch> đã tồn tại | `git checkout <ten_branch>` |     |
| Tạo ra nhánh <ten_branch> và di chuyển sang nhánh đó |`git checkout -b <ten_branch>` |    |

### GitIgnore
.gitignore = GitIgnore : Bỏ qua file / folder k g
Example .gitignore File:
password.txt   //file name  
security/     //folder name


`git checkout <revision>` - checkout về một revision bất kì
```
git checkout 070745d6c000d2a90740dcf97ee5db3f9418cc1f
```


## Javascript basic
### Conventions
- snake_case	
- **kebab-case** -> tên file
- **camelCase** -> tên biến
- **PascalCase** -> tên class

### Format of console.log

console.log with ' and "
```
console.log('Toi la Thao');

let name = Thao;

console.log(`Toi ten la ${name}`);        //Toi ten la Thao
console.log("Toi ten la " + name + "");   //Toi ten la Thao
```
### Object
- **Object = đối tượng**, dùng để **lưu trữ** tập hợp các giá trị vào cùng một **biế** hoặc **hằng số**
Structure
let/const <ten_object> = {
    <thuoc_tinh>: <gia_tri>,
}

Ví dụ:
```
const student = {
    "name": "Phong", 
    "age": 31, 
    "isLoveComputer": true,
    "money": 100.5
};

console.log("name = " + student.name);      //name = Phong

const product = {
    "name": "laptop",
    "price": 500,
    "isWindow": false,
    "manufacturer": {
        "name": "Apple",
        "year": 2024
    }
}

console.log("manufacturer name = " + product.manufacturer.name);      //manufacturer name = Apple
console.log("price = ",product["price"]);        //price = 500
```

### Modify existing properties
```
student.age = 21;
product["manufacturer"]["year"] = 2025;

product = {
    "name": "macbook"
};    //error
```

### Delete object's attributes
```
let employee = {
    name: 'Le Van C',
    age: 30,
    department: 'HR'
};

delete employee.age;
console.log(employee);

Output:
{name: 'Le Van C', department: 'HR'}
```

### Logical operation
&& - cả 2 vế của mệnh đề đều đúng
|| - một trong 2 vế đúng
! - đảo ngược lại giá trị của mệnh đề
Ví dụ:
```
if (!(a >=b)){
    console.log("A nho hon B")
}
```

### Array
Khai báo:
`const favoriteColors = ["Orange", "Blue", "Black", "White"];`
Truy xuất index:
`console.log(favoriteColors[0]);    //Orange`
.length -> trả về độ dài array:
`console.log(favoriteColors.length);     //4`
Kết hợp: 
`console.log(favoriteColors[(favoriteColors.length)-1]);`

## Function
- Structure
```
function <nameFunction>() {
    // code
}
```

Kết hợp kiến thức:

```
function kiemTraDiemSo (diemSo){
    if (diemso >= 9){
        console.log("Gioi");
    }
    if (diemSo >= 9 && diemSo < 9){
        console.log("Kha");
    }
    if (diemSo >= 5 && diemSo < 7){
        console.log("Trung Binh");
    }
    if (diemSo < 5) {
        console.log("Yeu");
    }
}

const diemSoArr = [1,2,8.7,5.3];

for (let i = 0; i < diemSoArr.length; i++>){
    kiemTraDiemSo(diemSoArr[i]);
}

// Output: Yeu, Yeu, Kha, Trung Binh
```
