// standart library untuk bekerja dengan Domain Name Server (DNS)

import dns from "dns";

function callback(error, ip){
  console.info(ip)
}

dns.lookup("www.github.com", callback);