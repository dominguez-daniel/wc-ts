pipeline {
  agent any
  tools { 
    nodejs "NodeJS" 
  }
  stages {
    stage('Build') {
      steps {
        echo 'Running build automation'
        sh 'npm install'
        sh 'npm run build'
        archiveArtifacts artifacts: 'build/'
      }
    }
  }
}
