enum Permission {
    admin = 1,
    user = "USER",
    readonly = "READONLY"
}

console.log(Permission.admin)
console.log(Permission.user)
console.log(Permission.readonly)
console.log(Permission[1])