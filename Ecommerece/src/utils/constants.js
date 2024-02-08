

const userTypes = {
    CUSTOMER: "CUSTOMER",
    ADMIN: "ADMIN"
}
const userStatus = {
    PENDING: "PENDING",
    BLOCKED: "BLOCKED",
    REJECTED: "REJECTED",
    APPROVED: "APPROVED"

}
const releaseStatus = {
    release:"RELEASED",
    unreleased:"UNRELEASED",
    blocked:"BLOCED"
}
const bookingStatus = {
    inProgress:"IN_PROGRESS",
    completed:"COMPLETED",
    cancelled: "CANCELLED",
    expired:"EXPIRED",
    faild:"FAILD"
}

const paymentStatus = {
    pending:"PENDING",
    success:"SUCCESS",
    failed:"FAILED"
}

module.exports = {
    userTypes,
    userStatus,
    releaseStatus,
    bookingStatus,
    paymentStatus
}