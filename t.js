import JWT from "jsonwebtoken";
const { sign, verify } = JWT;

console.log(sign('TestPasskey', 'AdminEntry'))

console.log(verify('eyJhbGciOiJIUzI1NiJ9.VGVzdFBhc3NrZXk.g2fy1hO3nzJQYLVKV4UZM3iNsxxk_vgbqL0z_6JxPCk', 'AdminEntry'))
// eyJhbGciOiJIUzI1NiJ9.VGVzdFBhc3NrZXk.g2fy1hO3nzJQYLVKV4UZM3iNsxxk_vgbqL0z_6JxPCk