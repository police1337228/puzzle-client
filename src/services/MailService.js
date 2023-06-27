import Api from "@/services/Api";

export default {
  mail(credentials) {
    return Api().post("mail", credentials);
  },
  mailRegister(credentials) {
    return Api().post("mail-register", credentials);
  },
};
