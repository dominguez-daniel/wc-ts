def remote = [:]
remote.name = "production"
remote.host = "159.65.36.208"

node {
  withCredentials([sshUserPrivateKey(credentialsId: 'production-id', keyFileVariable: 'KEY', passphraseVariable: 'USERPASS', usernameVariable: 'deploy')]) {
    remote.user = deploy
    remote.identityFile = KEY
    stage('Lets see if this works') {
      writeFile file: 'abc.txt', text: 'Hello World'
    }
  }
}


// pipeline {
//   agent any
//   tools { 
//     nodejs "NodeJS" 
//   }
//   stages {
//     stage('Build') {
//       steps {
//         echo 'Running build automation'
//         sh 'npm install'
//         sh 'npm run build'
//         archiveArtifacts artifacts: 'build/'
//       }
//     }
//   }
// }

