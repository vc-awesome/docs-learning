<?php
require('../vendor/autoload.php');

use EthTool\Credential;

/*
//new credential
$credential = Credential::new();
echo $credential->getPrivateKey() . PHP_EOL;
echo $credential->getPublicKey() . PHP_EOL;
echo $credential->getAddress() . PHP_EOL;
*/


//new wallet
//$wfn = Credential::newWallet('123','./keystore');
//echo $wfn . PHP_EOL;


//load wallet
$credential = Credential::fromWallet('123','./keystore/22cfeaa4523c1bf85b9ee6a5c1b86f97832630f7.json');
echo $credential->getPrivateKey() . PHP_EOL;
echo $credential->getPublicKey() . PHP_EOL;
echo $credential->getAddress() . PHP_EOL;
?>