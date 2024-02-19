type Messages=typeof import ("./messages/en.json")
type ArMessages=typeof import ("./messages/ar.json")
declare interface IntlMessages extends Messages, ArMessages{}