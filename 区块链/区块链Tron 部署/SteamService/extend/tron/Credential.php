<?php

namespace tron;

use Elliptic\EC;
use kornrunner\Keccak;

class Credential
{
    protected $keyPair;

    public function __construct($privateKey)
    {
        $ec = new EC('secp256k1');
        $this->keyPair = $ec->keyFromPrivate($privateKey);
    }

    public static function create()
    {
        $bin = random_bytes(32);
        $privateKey = bin2hex($bin);
        return new self($privateKey);
    }

    function privateKey()
    {
        return $this->keyPair->getPrivate()->toString(16, 2);
    }

    static function fromPrivateKey($privateKey)
    {
        return new self($privateKey);
    }

    function publicKey()
    {
        return $this->keyPair->getPublic()->encode('hex');
    }

    function address()
    {
        return Address::fromPublicKey($this->publicKey());
    }
    function signTx($tx){
        $signature = $this->sign($tx->txID);
        $tx->signature = [$signature];
        return $tx;
    }
    function sign($hex){
        $signature = $this->keyPair->sign($hex);
        $r = $signature->r->toString('hex');
        $s = $signature->s->toString('hex');
        $v = bin2hex(chr($signature->recoveryParam));
        return $r.$s.$v;
    }
}