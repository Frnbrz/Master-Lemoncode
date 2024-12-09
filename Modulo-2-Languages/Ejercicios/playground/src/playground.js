// Descifra el siguiente secreto:
var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv"

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación: as
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'"
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm"

function decrypt(secret) {
  // replace cipher with plain " " are the same
  var decrypted = ''

  for (var i = 0; i < secret.length; i++) {
    if (secret[i] === ' ') {
      decrypted += ' '
    } else {
      for (var j = 0; j < cipher.length; j++) {
        if (secret[i] === cipher[j]) {
          decrypted += plain[j]
        }
      }
    }
  }

  return decrypted
}

console.log(decrypt(secret))
