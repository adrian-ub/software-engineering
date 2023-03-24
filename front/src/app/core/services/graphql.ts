import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Attendance = {
  __typename?: 'Attendance';
  created_at: Scalars['String'];
  dateAttendance: Scalars['String'];
  id: Scalars['Int'];
  idTeacher: Scalars['Float'];
  status: Scalars['String'];
  student: StudentAttendance;
  updated_at: Scalars['String'];
};

export type Authentication = {
  __typename?: 'Authentication';
  accessToken: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateAttendanceInput = {
  dateAttendance: Scalars['String'];
  idTeacher: Scalars['Float'];
};

export type CreateStudentInput = {
  birthdate: Scalars['String'];
  document: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  lastNameTwo: Scalars['String'];
  photoUrl: Scalars['Upload'];
  secondName: Scalars['String'];
};

export type CreateTeacherInput = {
  birthdate: Scalars['String'];
  confirmationPassword: Scalars['String'];
  document: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  lastNameTwo: Scalars['String'];
  password: Scalars['String'];
  secondName: Scalars['String'];
  username: Scalars['String'];
};

export type CreateUploadFileInput = {
  file: Scalars['Upload'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkAttendance: Attendance;
  createStudent: Student;
  createTeacher: Teacher;
  createUploadFile: UploadFile;
  login: Authentication;
  register: Authentication;
  removeStudent: Student;
  removeTeacher: Teacher;
  updateStudent: Student;
  updateTeacher: Teacher;
};

export type MutationCheckAttendanceArgs = {
  attendance: CreateAttendanceInput;
  id: Scalars['Float'];
};

export type MutationCreateStudentArgs = {
  createStudentInput: CreateStudentInput;
};

export type MutationCreateTeacherArgs = {
  createTeacherInput: CreateTeacherInput;
};

export type MutationCreateUploadFileArgs = {
  createUploadFileInput: CreateUploadFileInput;
};

export type MutationLoginArgs = {
  createLoginInput: LoginInput;
};

export type MutationRegisterArgs = {
  createRegisterInput: RegisterInput;
};

export type MutationRemoveStudentArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveTeacherArgs = {
  id: Scalars['Int'];
};

export type MutationUpdateStudentArgs = {
  updateStudentInput: UpdateStudentInput;
};

export type MutationUpdateTeacherArgs = {
  updateTeacherInput: UpdateTeacherInput;
};

export type Query = {
  __typename?: 'Query';
  attendances: Array<Attendance>;
  getAttendanceByDate: Array<Attendance>;
  getAttendanceByDateAndStudent: Attendance;
  student: Student;
  students: Array<Student>;
  teacher: Teacher;
  teachers: Array<Teacher>;
};

export type QueryGetAttendanceByDateArgs = {
  date: Scalars['String'];
};

export type QueryGetAttendanceByDateAndStudentArgs = {
  date: Scalars['String'];
  idStudent: Scalars['Float'];
};

export type QueryStudentArgs = {
  id: Scalars['Int'];
};

export type QueryTeacherArgs = {
  id: Scalars['Int'];
};

export type RegisterInput = {
  confirmationPassword: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Student = {
  __typename?: 'Student';
  birthdate: Scalars['String'];
  document: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  lastNameTwo: Scalars['String'];
  photoUrl: Scalars['String'];
  secondName: Scalars['String'];
};

export type StudentAttendance = {
  __typename?: 'StudentAttendance';
  birthdate: Scalars['String'];
  document: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  lastNameTwo: Scalars['String'];
  photoUrl: Scalars['String'];
  secondName: Scalars['String'];
};

export type Teacher = {
  __typename?: 'Teacher';
  accessToken: Scalars['String'];
  birthdate: Scalars['String'];
  document: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Float'];
  idUser: Scalars['String'];
  lastName: Scalars['String'];
  lastNameTwo: Scalars['String'];
  secondName: Scalars['String'];
};

export type UpdateStudentInput = {
  birthdate?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: InputMaybe<Scalars['String']>;
  lastNameTwo?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['Upload']>;
  secondName?: InputMaybe<Scalars['String']>;
};

export type UpdateTeacherInput = {
  birthdate?: InputMaybe<Scalars['String']>;
  confirmationPassword?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: InputMaybe<Scalars['String']>;
  lastNameTwo?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  secondName?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  file: Scalars['String'];
};

export type Attendances_QueryQueryVariables = Exact<{ [key: string]: never }>;

export type Attendances_QueryQuery = {
  __typename?: 'Query';
  attendances: Array<{
    __typename?: 'Attendance';
    created_at: string;
    dateAttendance: string;
    id: number;
    idTeacher: number;
    status: string;
    updated_at: string;
    student: {
      __typename?: 'StudentAttendance';
      birthdate: string;
      document: string;
      firstName: string;
      id: number;
      lastName: string;
      lastNameTwo: string;
      photoUrl: string;
      secondName: string;
    };
  }>;
};

export type GetAttendanceByDate_QueryQueryVariables = Exact<{
  date: Scalars['String'];
}>;

export type GetAttendanceByDate_QueryQuery = {
  __typename?: 'Query';
  getAttendanceByDate: Array<{
    __typename?: 'Attendance';
    created_at: string;
    dateAttendance: string;
    id: number;
    idTeacher: number;
    status: string;
    updated_at: string;
    student: {
      __typename?: 'StudentAttendance';
      birthdate: string;
      document: string;
      firstName: string;
      id: number;
      lastName: string;
      lastNameTwo: string;
      photoUrl: string;
      secondName: string;
    };
  }>;
};

export type GetAttendanceByDateAndStudent_QueryQueryVariables = Exact<{
  date: Scalars['String'];
  idStudent: Scalars['Float'];
}>;

export type GetAttendanceByDateAndStudent_QueryQuery = {
  __typename?: 'Query';
  getAttendanceByDateAndStudent: {
    __typename?: 'Attendance';
    created_at: string;
    dateAttendance: string;
    id: number;
    idTeacher: number;
    status: string;
    updated_at: string;
    student: {
      __typename?: 'StudentAttendance';
      birthdate: string;
      document: string;
      firstName: string;
      id: number;
      lastName: string;
      lastNameTwo: string;
      photoUrl: string;
      secondName: string;
    };
  };
};

export type Student_QueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type Student_QueryQuery = {
  __typename?: 'Query';
  student: {
    __typename?: 'Student';
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    lastName: string;
    lastNameTwo: string;
    photoUrl: string;
    secondName: string;
    status: string;
  };
};

export type Students_QueryQueryVariables = Exact<{ [key: string]: never }>;

export type Students_QueryQuery = {
  __typename?: 'Query';
  students: Array<{
    __typename?: 'Student';
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    lastName: string;
    lastNameTwo: string;
    photoUrl: string;
    secondName: string;
  }>;
};

export type Teacher_QueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type Teacher_QueryQuery = {
  __typename?: 'Query';
  teacher: {
    __typename?: 'Teacher';
    accessToken: string;
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    idUser: string;
    lastName: string;
    lastNameTwo: string;
    secondName: string;
  };
};

export type Teachers_QueryQueryVariables = Exact<{ [key: string]: never }>;

export type Teachers_QueryQuery = {
  __typename?: 'Query';
  teachers: Array<{
    __typename?: 'Teacher';
    accessToken?: string;
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    idUser: string;
    lastName: string;
    lastNameTwo: string;
    secondName: string;
  }>;
};

export type CheckAttendance_MutationMutationVariables = Exact<{
  attendance: CreateAttendanceInput;
  id: Scalars['Float'];
}>;

export type CheckAttendance_MutationMutation = {
  __typename?: 'Mutation';
  checkAttendance: {
    __typename?: 'Attendance';
    created_at: string;
    dateAttendance: string;
    id: number;
    idTeacher: number;
    status: string;
    updated_at: string;
    student: {
      __typename?: 'StudentAttendance';
      birthdate: string;
      document: string;
      firstName: string;
      id: number;
      lastName: string;
      lastNameTwo: string;
      photoUrl: string;
      secondName: string;
    };
  };
};

export type CreateStudent_MutationMutationVariables = Exact<{
  createStudentInput: CreateStudentInput;
}>;

export type CreateStudent_MutationMutation = {
  __typename?: 'Mutation';
  createStudent: {
    __typename?: 'Student';
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    lastName: string;
    lastNameTwo: string;
    photoUrl: string;
    secondName: string;
  };
};

export type CreateTeacher_MutationMutationVariables = Exact<{
  createTeacherInput: CreateTeacherInput;
}>;

export type CreateTeacher_MutationMutation = {
  __typename?: 'Mutation';
  createTeacher: {
    __typename?: 'Teacher';
    accessToken: string;
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    idUser: string;
    lastName: string;
    lastNameTwo: string;
    secondName: string;
  };
};

export type CreateUploadFile_MutationMutationVariables = Exact<{
  createUploadFileInput: CreateUploadFileInput;
}>;

export type CreateUploadFile_MutationMutation = {
  __typename?: 'Mutation';
  createUploadFile: { __typename?: 'UploadFile'; file: string };
};

export type Login_MutationMutationVariables = Exact<{
  createLoginInput: LoginInput;
}>;

export type Login_MutationMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'Authentication'; accessToken: string; userId: string };
};

export type Register_MutationMutationVariables = Exact<{
  createRegisterInput: RegisterInput;
}>;

export type Register_MutationMutation = {
  __typename?: 'Mutation';
  register: {
    __typename?: 'Authentication';
    accessToken: string;
    userId: string;
  };
};

export type RemoveStudent_MutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type RemoveStudent_MutationMutation = {
  __typename?: 'Mutation';
  removeStudent: {
    __typename?: 'Student';
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    lastName: string;
    lastNameTwo: string;
    photoUrl: string;
    secondName: string;
  };
};

export type RemoveTeacher_MutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type RemoveTeacher_MutationMutation = {
  __typename?: 'Mutation';
  removeTeacher: {
    __typename?: 'Teacher';
    accessToken: string;
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    idUser: string;
    lastName: string;
    lastNameTwo: string;
    secondName: string;
  };
};

export type UpdateStudent_MutationMutationVariables = Exact<{
  updateStudentInput: UpdateStudentInput;
}>;

export type UpdateStudent_MutationMutation = {
  __typename?: 'Mutation';
  updateStudent: {
    __typename?: 'Student';
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    lastName: string;
    lastNameTwo: string;
    photoUrl: string;
    secondName: string;
  };
};

export type UpdateTeacher_MutationMutationVariables = Exact<{
  updateTeacherInput: UpdateTeacherInput;
}>;

export type UpdateTeacher_MutationMutation = {
  __typename?: 'Mutation';
  updateTeacher: {
    __typename?: 'Teacher';
    accessToken: string;
    birthdate: string;
    document: string;
    firstName: string;
    id: number;
    idUser: string;
    lastName: string;
    lastNameTwo: string;
    secondName: string;
  };
};

export const Attendances_QueryDocument = gql`
  query attendances_query {
    attendances {
      created_at
      dateAttendance
      id
      idTeacher
      status
      student {
        birthdate
        document
        firstName
        id
        lastName
        lastNameTwo
        photoUrl
        secondName
      }
      updated_at
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class Attendances_QueryGQL extends Apollo.Query<
  Attendances_QueryQuery,
  Attendances_QueryQueryVariables
> {
  override document = Attendances_QueryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetAttendanceByDate_QueryDocument = gql`
  query getAttendanceByDate_query($date: String!) {
    getAttendanceByDate(date: $date) {
      created_at
      dateAttendance
      id
      idTeacher
      status
      student {
        birthdate
        document
        firstName
        id
        lastName
        lastNameTwo
        photoUrl
        secondName
      }
      updated_at
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetAttendanceByDate_QueryGQL extends Apollo.Query<
  GetAttendanceByDate_QueryQuery,
  GetAttendanceByDate_QueryQueryVariables
> {
  override document = GetAttendanceByDate_QueryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetAttendanceByDateAndStudent_QueryDocument = gql`
  query getAttendanceByDateAndStudent_query(
    $date: String!
    $idStudent: Float!
  ) {
    getAttendanceByDateAndStudent(date: $date, idStudent: $idStudent) {
      created_at
      dateAttendance
      id
      idTeacher
      status
      student {
        birthdate
        document
        firstName
        id
        lastName
        lastNameTwo
        photoUrl
        secondName
      }
      updated_at
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetAttendanceByDateAndStudent_QueryGQL extends Apollo.Query<
  GetAttendanceByDateAndStudent_QueryQuery,
  GetAttendanceByDateAndStudent_QueryQueryVariables
> {
  override document = GetAttendanceByDateAndStudent_QueryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const Student_QueryDocument = gql`
  query student_query($id: Int!) {
    student(id: $id) {
      birthdate
      document
      firstName
      id
      lastName
      lastNameTwo
      photoUrl
      secondName
      status
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class Student_QueryGQL extends Apollo.Query<
  Student_QueryQuery,
  Student_QueryQueryVariables
> {
  override document = Student_QueryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const Students_QueryDocument = gql`
  query students_query {
    students {
      birthdate
      document
      firstName
      id
      lastName
      lastNameTwo
      photoUrl
      secondName
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class Students_QueryGQL extends Apollo.Query<
  Students_QueryQuery,
  Students_QueryQueryVariables
> {
  override document = Students_QueryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const Teacher_QueryDocument = gql`
  query teacher_query($id: Int!) {
    teacher(id: $id) {
      accessToken
      birthdate
      document
      firstName
      id
      idUser
      lastName
      lastNameTwo
      secondName
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class Teacher_QueryGQL extends Apollo.Query<
  Teacher_QueryQuery,
  Teacher_QueryQueryVariables
> {
  override document = Teacher_QueryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const Teachers_QueryDocument = gql`
  query teachers_query {
    teachers {
      birthdate
      document
      firstName
      id
      idUser
      lastName
      lastNameTwo
      secondName
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class Teachers_QueryGQL extends Apollo.Query<
  Teachers_QueryQuery,
  Teachers_QueryQueryVariables
> {
  override document = Teachers_QueryDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CheckAttendance_MutationDocument = gql`
  mutation checkAttendance_mutation(
    $attendance: CreateAttendanceInput!
    $id: Float!
  ) {
    checkAttendance(attendance: $attendance, id: $id) {
      created_at
      dateAttendance
      id
      idTeacher
      status
      student {
        birthdate
        document
        firstName
        id
        lastName
        lastNameTwo
        photoUrl
        secondName
      }
      updated_at
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CheckAttendance_MutationGQL extends Apollo.Mutation<
  CheckAttendance_MutationMutation,
  CheckAttendance_MutationMutationVariables
> {
  override document = CheckAttendance_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CreateStudent_MutationDocument = gql`
  mutation createStudent_mutation($createStudentInput: CreateStudentInput!) {
    createStudent(createStudentInput: $createStudentInput) {
      birthdate
      document
      firstName
      id
      lastName
      lastNameTwo
      photoUrl
      secondName
      status
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CreateStudent_MutationGQL extends Apollo.Mutation<
  CreateStudent_MutationMutation,
  CreateStudent_MutationMutationVariables
> {
  override document = CreateStudent_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CreateTeacher_MutationDocument = gql`
  mutation createTeacher_mutation($createTeacherInput: CreateTeacherInput!) {
    createTeacher(createTeacherInput: $createTeacherInput) {
      accessToken
      birthdate
      document
      firstName
      id
      idUser
      lastName
      lastNameTwo
      secondName
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CreateTeacher_MutationGQL extends Apollo.Mutation<
  CreateTeacher_MutationMutation,
  CreateTeacher_MutationMutationVariables
> {
  override document = CreateTeacher_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CreateUploadFile_MutationDocument = gql`
  mutation createUploadFile_mutation(
    $createUploadFileInput: CreateUploadFileInput!
  ) {
    createUploadFile(createUploadFileInput: $createUploadFileInput) {
      file
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CreateUploadFile_MutationGQL extends Apollo.Mutation<
  CreateUploadFile_MutationMutation,
  CreateUploadFile_MutationMutationVariables
> {
  override document = CreateUploadFile_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const Login_MutationDocument = gql`
  mutation login_mutation($createLoginInput: LoginInput!) {
    login(createLoginInput: $createLoginInput) {
      accessToken
      userId
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class Login_MutationGQL extends Apollo.Mutation<
  Login_MutationMutation,
  Login_MutationMutationVariables
> {
  override document = Login_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const Register_MutationDocument = gql`
  mutation register_mutation($createRegisterInput: RegisterInput!) {
    register(createRegisterInput: $createRegisterInput) {
      accessToken
      userId
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class Register_MutationGQL extends Apollo.Mutation<
  Register_MutationMutation,
  Register_MutationMutationVariables
> {
  override document = Register_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const RemoveStudent_MutationDocument = gql`
  mutation removeStudent_mutation($id: Int!) {
    removeStudent(id: $id) {
      birthdate
      document
      firstName
      id
      lastName
      lastNameTwo
      photoUrl
      secondName
      status
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class RemoveStudent_MutationGQL extends Apollo.Mutation<
  RemoveStudent_MutationMutation,
  RemoveStudent_MutationMutationVariables
> {
  override document = RemoveStudent_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const RemoveTeacher_MutationDocument = gql`
  mutation removeTeacher_mutation($id: Int!) {
    removeTeacher(id: $id) {
      accessToken
      birthdate
      document
      firstName
      id
      idUser
      lastName
      lastNameTwo
      secondName
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class RemoveTeacher_MutationGQL extends Apollo.Mutation<
  RemoveTeacher_MutationMutation,
  RemoveTeacher_MutationMutationVariables
> {
  override document = RemoveTeacher_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const UpdateStudent_MutationDocument = gql`
  mutation updateStudent_mutation($updateStudentInput: UpdateStudentInput!) {
    updateStudent(updateStudentInput: $updateStudentInput) {
      birthdate
      document
      firstName
      id
      lastName
      lastNameTwo
      photoUrl
      secondName
      status
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UpdateStudent_MutationGQL extends Apollo.Mutation<
  UpdateStudent_MutationMutation,
  UpdateStudent_MutationMutationVariables
> {
  override document = UpdateStudent_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const UpdateTeacher_MutationDocument = gql`
  mutation updateTeacher_mutation($updateTeacherInput: UpdateTeacherInput!) {
    updateTeacher(updateTeacherInput: $updateTeacherInput) {
      accessToken
      birthdate
      document
      firstName
      id
      idUser
      lastName
      lastNameTwo
      secondName
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UpdateTeacher_MutationGQL extends Apollo.Mutation<
  UpdateTeacher_MutationMutation,
  UpdateTeacher_MutationMutationVariables
> {
  override document = UpdateTeacher_MutationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type WatchQueryOptionsAlone<V> = Omit<
  ApolloCore.WatchQueryOptions<any>,
  'query' | 'variables'
>;

type QueryOptionsAlone<V> = Omit<
  ApolloCore.QueryOptions<V>,
  'query' | 'variables'
>;

type MutationOptionsAlone<T, V> = Omit<
  ApolloCore.MutationOptions<T, V>,
  'mutation' | 'variables'
>;

@Injectable({ providedIn: 'root' })
export class GraphqlSDK {
  constructor(
    private attendancesQueryGql: Attendances_QueryGQL,
    private getAttendanceByDateQueryGql: GetAttendanceByDate_QueryGQL,
    private getAttendanceByDateAndStudentQueryGql: GetAttendanceByDateAndStudent_QueryGQL,
    private studentQueryGql: Student_QueryGQL,
    private studentsQueryGql: Students_QueryGQL,
    private teacherQueryGql: Teacher_QueryGQL,
    private teachersQueryGql: Teachers_QueryGQL,
    private checkAttendanceMutationGql: CheckAttendance_MutationGQL,
    private createStudentMutationGql: CreateStudent_MutationGQL,
    private createTeacherMutationGql: CreateTeacher_MutationGQL,
    private createUploadFileMutationGql: CreateUploadFile_MutationGQL,
    private loginMutationGql: Login_MutationGQL,
    private registerMutationGql: Register_MutationGQL,
    private removeStudentMutationGql: RemoveStudent_MutationGQL,
    private removeTeacherMutationGql: RemoveTeacher_MutationGQL,
    private updateStudentMutationGql: UpdateStudent_MutationGQL,
    private updateTeacherMutationGql: UpdateTeacher_MutationGQL
  ) {}

  attendancesQuery(
    variables?: Attendances_QueryQueryVariables,
    options?: QueryOptionsAlone<Attendances_QueryQueryVariables>
  ) {
    return this.attendancesQueryGql.fetch(variables, options);
  }

  attendancesQueryWatch(
    variables?: Attendances_QueryQueryVariables,
    options?: WatchQueryOptionsAlone<Attendances_QueryQueryVariables>
  ) {
    return this.attendancesQueryGql.watch(variables, options);
  }

  getAttendanceByDateQuery(
    variables: GetAttendanceByDate_QueryQueryVariables,
    options?: QueryOptionsAlone<GetAttendanceByDate_QueryQueryVariables>
  ) {
    return this.getAttendanceByDateQueryGql.fetch(variables, options);
  }

  getAttendanceByDateQueryWatch(
    variables: GetAttendanceByDate_QueryQueryVariables,
    options?: WatchQueryOptionsAlone<GetAttendanceByDate_QueryQueryVariables>
  ) {
    return this.getAttendanceByDateQueryGql.watch(variables, options);
  }

  getAttendanceByDateAndStudentQuery(
    variables: GetAttendanceByDateAndStudent_QueryQueryVariables,
    options?: QueryOptionsAlone<GetAttendanceByDateAndStudent_QueryQueryVariables>
  ) {
    return this.getAttendanceByDateAndStudentQueryGql.fetch(variables, options);
  }

  getAttendanceByDateAndStudentQueryWatch(
    variables: GetAttendanceByDateAndStudent_QueryQueryVariables,
    options?: WatchQueryOptionsAlone<GetAttendanceByDateAndStudent_QueryQueryVariables>
  ) {
    return this.getAttendanceByDateAndStudentQueryGql.watch(variables, options);
  }

  studentQuery(
    variables: Student_QueryQueryVariables,
    options?: QueryOptionsAlone<Student_QueryQueryVariables>
  ) {
    return this.studentQueryGql.fetch(variables, options);
  }

  studentQueryWatch(
    variables: Student_QueryQueryVariables,
    options?: WatchQueryOptionsAlone<Student_QueryQueryVariables>
  ) {
    return this.studentQueryGql.watch(variables, options);
  }

  studentsQuery(
    variables?: Students_QueryQueryVariables,
    options?: QueryOptionsAlone<Students_QueryQueryVariables>
  ) {
    return this.studentsQueryGql.fetch(variables, options);
  }

  studentsQueryWatch(
    variables?: Students_QueryQueryVariables,
    options?: WatchQueryOptionsAlone<Students_QueryQueryVariables>
  ) {
    return this.studentsQueryGql.watch(variables, options);
  }

  teacherQuery(
    variables: Teacher_QueryQueryVariables,
    options?: QueryOptionsAlone<Teacher_QueryQueryVariables>
  ) {
    return this.teacherQueryGql.fetch(variables, options);
  }

  teacherQueryWatch(
    variables: Teacher_QueryQueryVariables,
    options?: WatchQueryOptionsAlone<Teacher_QueryQueryVariables>
  ) {
    return this.teacherQueryGql.watch(variables, options);
  }

  teachersQuery(
    variables?: Teachers_QueryQueryVariables,
    options?: QueryOptionsAlone<Teachers_QueryQueryVariables>
  ) {
    return this.teachersQueryGql.fetch(variables, options);
  }

  teachersQueryWatch(
    variables?: Teachers_QueryQueryVariables,
    options?: WatchQueryOptionsAlone<Teachers_QueryQueryVariables>
  ) {
    return this.teachersQueryGql.watch(variables, options);
  }

  checkAttendanceMutation(
    variables: CheckAttendance_MutationMutationVariables,
    options?: MutationOptionsAlone<
      CheckAttendance_MutationMutation,
      CheckAttendance_MutationMutationVariables
    >
  ) {
    return this.checkAttendanceMutationGql.mutate(variables, options);
  }

  createStudentMutation(
    variables: CreateStudent_MutationMutationVariables,
    options?: MutationOptionsAlone<
      CreateStudent_MutationMutation,
      CreateStudent_MutationMutationVariables
    >
  ) {
    return this.createStudentMutationGql.mutate(variables, options);
  }

  createTeacherMutation(
    variables: CreateTeacher_MutationMutationVariables,
    options?: MutationOptionsAlone<
      CreateTeacher_MutationMutation,
      CreateTeacher_MutationMutationVariables
    >
  ) {
    return this.createTeacherMutationGql.mutate(variables, options);
  }

  createUploadFileMutation(
    variables: CreateUploadFile_MutationMutationVariables,
    options?: MutationOptionsAlone<
      CreateUploadFile_MutationMutation,
      CreateUploadFile_MutationMutationVariables
    >
  ) {
    return this.createUploadFileMutationGql.mutate(variables, options);
  }

  loginMutation(
    variables: Login_MutationMutationVariables,
    options?: MutationOptionsAlone<
      Login_MutationMutation,
      Login_MutationMutationVariables
    >
  ) {
    return this.loginMutationGql.mutate(variables, options);
  }

  registerMutation(
    variables: Register_MutationMutationVariables,
    options?: MutationOptionsAlone<
      Register_MutationMutation,
      Register_MutationMutationVariables
    >
  ) {
    return this.registerMutationGql.mutate(variables, options);
  }

  removeStudentMutation(
    variables: RemoveStudent_MutationMutationVariables,
    options?: MutationOptionsAlone<
      RemoveStudent_MutationMutation,
      RemoveStudent_MutationMutationVariables
    >
  ) {
    return this.removeStudentMutationGql.mutate(variables, options);
  }

  removeTeacherMutation(
    variables: RemoveTeacher_MutationMutationVariables,
    options?: MutationOptionsAlone<
      RemoveTeacher_MutationMutation,
      RemoveTeacher_MutationMutationVariables
    >
  ) {
    return this.removeTeacherMutationGql.mutate(variables, options);
  }

  updateStudentMutation(
    variables: UpdateStudent_MutationMutationVariables,
    options?: MutationOptionsAlone<
      UpdateStudent_MutationMutation,
      UpdateStudent_MutationMutationVariables
    >
  ) {
    return this.updateStudentMutationGql.mutate(variables, options);
  }

  updateTeacherMutation(
    variables: UpdateTeacher_MutationMutationVariables,
    options?: MutationOptionsAlone<
      UpdateTeacher_MutationMutation,
      UpdateTeacher_MutationMutationVariables
    >
  ) {
    return this.updateTeacherMutationGql.mutate(variables, options);
  }
}
