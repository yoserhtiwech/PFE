import { Component, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AppAddEmployesComponent } from './add/add.component';
import {  Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/service/user.service';
import { UserResponse } from 'src/app/services/models/user-response';
import { GroupeService } from 'src/app/services/service/groupe.service';
import { RoleService } from 'src/app/services/service/role.service';
import { NumberService } from 'src/app/services/services';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { GroupeResponse } from 'src/app/services/models/groupe-response';
import { updateRequest } from 'src/app/services/models/update-Request';
import { roleNames } from 'src/app/services/fn/role/roleNames';
import { DialogData } from '../dialog/dialog.component';
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}
const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Sunil Joshi',
    position: 'Web Designer',
    productName: 'Elite Admin',
    budget: 3.9,
    priority: 'low'
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    productName: 'Real Homes Theme',
    budget: 24.5,
    priority: 'medium'
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    productName: 'MedicalPro Theme',
    budget: 12.8,
    priority: 'high'
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    productName: 'Hosting Press HTML',
    budget: 2.4,
    priority: 'critical'
  },
];

/* export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
} */
  export class TodoItemNode {
    children: TodoItemNode[];
    item: string;
    number: number;
  }
  
  export class TodoItemFlatNode {
    item: string;
    level: number;
    expandable: boolean;
    number: number;
  }
  
const TREE_DATA = {
  Reminders: [
    'Cook dinner',
    'Read the Material Design spec',
    'Upgrade Application to Angular',
  ],
 
};

export interface Employee {
  id: number;
  Name: string;
  Position: string;
  Email: string;
  Number: number;
  DateOfJoining: Date;
  Salary: number;
  Projects: number;
  imagePath: string;
}
interface followercards {
  id: number;
  imgSrc: string;
  title: string;
  subtext: string;}

const employees = [
  {
    id: 1,
    Name: 'Johnathan Deo',
    Position: 'Seo Expert',
    Email: 'r@gmail.com',
    Number: 9786838,
    DateOfJoining: new Date('01-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-2.jpg',
  },
  {
    id: 2,
    Name: 'Mark Zukerburg',
    Position: 'Web Developer',
    Email: 'mark@gmail.com',
    Number: 8786838,
    DateOfJoining: new Date('04-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 3,
    Name: 'Sam smith',
    Position: 'Web Designer',
    Email: 'sam@gmail.com',
    Number: 7788838,
    DateOfJoining: new Date('02-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 1,
    Name: 'Johnathan Deo',
    Position: 'Seo Expert',
    Email: 'r@gmail.com',
    Number: 9786838,
    DateOfJoining: new Date('01-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-2.jpg',
  },
  {
    id: 2,
    Name: 'Mark Zukerburg',
    Position: 'Web Developer',
    Email: 'mark@gmail.com',
    Number: 8786838,
    DateOfJoining: new Date('04-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 3,
    Name: 'Sam smith',
    Position: 'Web Designer',
    Email: 'sam@gmail.com',
    Number: 7788838,
    DateOfJoining: new Date('02-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-4.jpg',
  },{
    id: 1,
    Name: 'Johnathan Deo',
    Position: 'Seo Expert',
    Email: 'r@gmail.com',
    Number: 9786838,
    DateOfJoining: new Date('01-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-2.jpg',
  },
  {
    id: 2,
    Name: 'Mark Zukerburg',
    Position: 'Web Developer',
    Email: 'mark@gmail.com',
    Number: 8786838,
    DateOfJoining: new Date('04-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 3,
    Name: 'Sam smith',
    Position: 'Web Designer',
    Email: 'sam@gmail.com',
    Number: 7788838,
    DateOfJoining: new Date('02-2-2020'),
    Salary: 12000,
    Projects: 10,
    imagePath: 'assets/images/profile/user-4.jpg',
  },
];
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] {
    return this.dataChange.value;
  }

  constructor() {
   // this.initialize();
  }

  /* initialize() {
    const data = this.buildFileTree(TREE_DATA, 0);
    this.dataChange.next(data);
  } */
    initialize(userNumbers: { id: number; num: number }[][]) {
      const data = this.buildFileTreeFromUsers(userNumbers, 0);
      this.dataChange.next(data);
    }
    buildFileTreeFromUsers(userNumbers: { id: number; num: number }[][], level: number): TodoItemNode[] {
      return userNumbers.map(user => {
        const node = new TodoItemNode();
        node.item = "number"; // Assuming each user array has at least one number object
  
        node.children = user.map(number => {
          const numberNode = new TodoItemNode();
          numberNode.item = `Number: ${number.num}`;
          return numberNode;
        });
  
        return node;
      });
    }
  
    insertItem(parent: TodoItemNode, name: string) {
      if (parent.children) {
        parent.children.push({ item: name } as TodoItemNode);
        this.dataChange.next(this.data);
      }
    }
  
    updateItem(node: TodoItemNode, name: string) {
      node.item = name;
      this.dataChange.next(this.data);
    }
 
 /*  buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (Array.isArray(value)) {
          node.children = value.map(item => {
            const childNode = new TodoItemNode();
            childNode.item = item;
            return childNode;
          });
        } else {
          node.children = this.buildFileTree(value, level + 1);
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  insertItem(parent: TodoItemNode, name: string) {
    if (parent.children) {
      parent.children.push({ item: name } as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  } */
}

@Component({
  templateUrl: './employes.component.html',
  providers: [ChecklistDatabase],
  styleUrls: ['./employes.component.scss'],
})
export class AppEmployesComponent implements AfterViewInit,OnInit {
  userResponse:UserResponse[]=[];
  groupeResponse:GroupeResponse[]=[];
  displayedColumns1: string[] = ['assigned', 'name'];
  dataSource1 :GroupeResponse[];
  dataSource3:UserResponse[][];

  firstControl = new FormControl('');
  firstoption: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  /* flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();
  selectedParent: TodoItemFlatNode | null = null;
  newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;
  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;
  dataSource2: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true);
  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);*/
  searchText: any;
  displayedColumns: string[] = [
    '#',
    'name',
    'email',
    'number',
    'date of joining',
    'action',
  ];
   
  dataSource = new MatTableDataSource<UserResponse>();
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  grouprname: any;

  constructor(private _database: ChecklistDatabase,public dialog: MatDialog, public datePipe: DatePipe ,private router: Router,private userService:UserService,private groupeService:GroupeService ,private RoleService:RoleService,private NumberService:NumberService) { 
   /*  this.treeFlattener = new MatTreeFlattener(
    this.transformer,
    this.getLevel,
    this.isExpandable,
    this.getChildren 
  );*/
  
 /*  this.dataSource2 = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  );

  _database.dataChange.subscribe((data) => {
    this.dataSource2.data = data;
  }); } */
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  } 
  openInjectDialog(groupName: string) {
   const dialogRef=  this.dialog.open(AppDialogDataComponent, {
      data: { groupName: groupName },
      
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.data) {
        console.log(result.data)
        this.groupeService.updategroup(groupName,result.data).subscribe((result2)=>{
          if(result2){}
        console.log(result2);
        })}})
  }
  ngOnInit(): void {
    
    this.findAllUsers();
    this.findAllMembres();
  } 
  private findAllUsers() {
    this.userService.findAllUsers().subscribe({next:(users: UserResponse[])=>{this.userResponse=users;
      this.dataSource.data=users;
      //const userNumbers = users.map(user => user.Number);
      //this._database.initialize(userNumbers);
    

    }}
  );
  }  
  private findAllMembres(){
    this.groupeService.findAllMembers().subscribe({next:(members: GroupeResponse[])=>{this.groupeResponse=members; 
      this.dataSource1=members; 
      
      this.dataSource3=members.map(users=> users.users);
      console.log(this.dataSource3);
    }})
  } 
  
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, obj: any): void {
    obj.action = action; 
    console.log(action)
    const dialogRef = this.dialog.open(AppEmployesDialogContentComponent, {
      data: obj,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Add') {
        this.userService.AddUser(result.data).subscribe((result)=>{
          if(result){
          this.dialog.open(AppAddEmployesComponent);}
        })
      } /* else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      } */
    });
  }

  // tslint:disable-next-line - Disables all
  addRowData(row_obj: Employee): void {
    /* this.dataSource.data.unshift({
      id: employees.length + 1,
      fullname: row_obj.Name,
      Email: row_obj.Email,
      groupe: undefined,
      Number: undefined 
    });*/
    this.dialog.open(AppAddEmployesComponent);
    //this.table.renderRows();
  }

  // tslint:disable-next-line - Disables all
 /* updateRowData(row_obj: Employee): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      if (value.id === row_obj.id) {
        value.Name = row_obj.Name;
        value.Position = row_obj.Position;
        value.Email = row_obj.Email;
        value.Mobile = row_obj.Number;
        value.DateOfJoining = row_obj.DateOfJoining;
        value.Salary = row_obj.Salary;
        value.Projects = row_obj.Projects;
        value.imagePath = row_obj.imagePath;
      }
      return true;
    });
  }

  // tslint:disable-next-line - Disables all
  deleteRowData(row_obj: Employee): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      return value.id !== row_obj.id;
    });
  }
  getLevel = (node: TodoItemFlatNode) => node.level;
  isExpandable = (node: TodoItemFlatNode) => node.expandable;
  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;
  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;
  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.item === node.item
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }

  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
    descendants.forEach((child) => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }
*/
 /*  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  } */

  /* checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  addNewItem(node: TodoItemFlatNode) {
    const parentNode = this.flatNodeMap.get(node);
    this._database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this._database.updateItem(nestedNode!, itemValue);}
    followercards: followercards[] = [
      
      {
        id: 2,
        imgSrc: '/assets/images/profile/user-2.jpg',
        title: 'Leo Pratt',
        subtext: 'Bulgaria',
      },
      {
        id: 3,
        imgSrc: '/assets/images/profile/user-3.jpg',
        title: 'Charles Nunez',
        subtext: 'Nepal',
      },
     
      {
        id: 2,
        imgSrc: '/assets/images/profile/user-2.jpg',
        title: 'Leo Pratt',
        subtext: 'Bulgaria',
      },
      {
        id: 3,
        imgSrc: '/assets/images/profile/user-3.jpg',
        title: 'Charles Nunez',
        subtext: 'Nepal',
      },
    ]; */
}
@Component({
  selector: 'dialog-data-example-dialog',
  providers: [ChecklistDatabase, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: 'dialog-data.component.html',
})
export class AppDialogDataComponent {
  groupName: any;
  data1: any;
  groupName1: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { groupName: string } ,private fb: FormBuilder,
  public datePipe: DatePipe,public dialogRef: MatDialogRef<AppDialogDataComponent>,) {
this.data1=data;
this.groupName1=this.data1.groupName;
this.groupName=this.data1.groupName;


}
doAction(){
  console.log(this.groupName)
  console.log(this.groupName1)
  if (this.groupName!=this.groupName1) { 
    this.dialogRef.close({  data: this.groupName});
    
  }else{this.dialogRef.close}
}}


 
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dialog-content',
  providers: [ChecklistDatabase, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: 'employes-dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class AppEmployesDialogContentComponent implements OnInit { 
  userForm: FormGroup;
  firstControl = new FormControl('');
  firstoption: string[] ;
  filteredOptions: Observable<string[]>;

  action: string;
  // tslint:disable-next-line - Disables all
  
  selectedImage: any = '';
  joiningDate: any = '';
  local_data: any;
updateUser:updateRequest = { email: '', group: '', num: 0, role: '' };

  constructor(private groupeService:GroupeService ,private RoleService:RoleService,private NumberService:NumberService,
    private fb: FormBuilder,
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<AppEmployesDialogContentComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data : updateRequest,
  ) { 
    this.local_data={...data};
    this.action = this.local_data.action;
    this.userForm = this.fb.group({
      group: [this.local_data.group|| '', Validators.required],
      email: [this.local_data.email || '', [Validators.required, Validators.email]],
      number: [this.local_data.number ||'', Validators.required],
      role:[this.local_data.role ||'', Validators.required]
    });
   
    
  }
  private getRoleNames(): Observable<string[]> {
    return this.RoleService.roleNames();
}

  private getGroupeNames():Observable<string[]>{
    return this.groupeService.findGroupName();
  }
  private getNumberAvailable():number[]{
    let numbers: number[] = [];
    this.NumberService.findAvailableNumbers().subscribe({
        next: (response: any) => {
            // Assuming response contains an array of objects and each object has a 'num' property
            numbers = response.map((item: any) => item.num);
        }
    });
    return numbers;
  }
  doAction(): void {
    console.log(this.userForm.get('email')?.value)
     this.updateUser.email=this.userForm.get('email')?.value;
   this.updateUser.group=this.userForm.get('group')?.value;
    this.updateUser.num=this.userForm.get('number')?.value;
   this.updateUser.role=this.userForm.get('role')?.value;
   this.dialogRef.close({ event: this.action, data: this.updateUser});
  }
  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }

  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      // this.msg = 'You must select an image';
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.msg = "Only images are supported";
      return;
    }
    // tslint:disable-next-line - Disables all
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line - Disables all
    reader.onload = (_event) => {
      // tslint:disable-next-line - Disables all
      this.local_data.imagePath = reader.result;
    };
    
  } 
  ngOnInit() {
    this.getRoleNames().subscribe({
      next: (names: string[]) => {
          this.firstoption = names;
          this.filteredOptions = this.firstControl.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value || ''))
          )
          console.log(roleNames);
      },
      error: (err) => {
          console.error('Error fetching role names:', err);
      }
  });
    // first option
    ;}



    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.firstoption.filter((option) =>
        option.toLowerCase().includes(filterValue)
      );
    }
   
}
function doAction() {
  throw new Error('Function not implemented.');
}

