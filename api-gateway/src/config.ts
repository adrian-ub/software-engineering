export const endpoints = {
  msAuthentication: process.env.MS_AUTH || 'http://localhost:3001',
  msTeacher: process.env.MS_TEACHER || 'http://localhost:9001',
  msStudent: process.env.MS_STUDENT || 'http://localhost:9002',
  msAttendance: process.env.MS_ATTENDANCE || 'http://localhost:9002',
  msUpload: process.env.MS_UPLOAD || 'http://localhost:3000',
};
