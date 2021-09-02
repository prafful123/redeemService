let customers, channels, eligibilityService, response;

customers = [
	"ac0001",
	"ac0002",
	"ac0003",
	"ac0004",
	"ac0005"
];
channels = {
				"SPORTS" : "CHAMPIONS_LEAGUE_FINAL_TICKET",
				"KIDS" : "N/A",
				"MUSIC" : "KARAOKE_PRO_MICROPHONE",
				"NEWS" : "N/A",
				"MOVIES" : "PIRATES_OF_THE_CARIBBEAN_COLLECTION"
			};
eligibilityService = {
	"ac0001":"SPORTS",
	"ac0002":"KIDS",
	"ac0003":"NEWS",
	"ac0004":"MOVIES",
	"ac0005":""
};
response = {
	"CUSTOMER_ELIGIBLE" : "Return relevant rewards according to the customer's",
	"CUSTOMER_INELIGIBLE" : "Return no rewards",
	"TECHNICAL_FAILURE_EXCEPTION" : "Return no rewards",
	"INVALID_ACCOUNT_NUMBER_EXCEPTION" : "Return no rewards and notify the client that the account number is invalid"
}