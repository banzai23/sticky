val ktor_version: String by project
val kotlin_version: String by project
val logback_version: String by project

plugins {
	application
	kotlin("jvm") version "1.6.10"
	id("org.jetbrains.kotlin.plugin.serialization") version "1.6.10"
}

group = "com.mcqueary"
version = "0.0.1"
application {
	mainClass.set("io.ktor.server.netty.EngineMain")
}

repositories {
	mavenCentral()
	maven { url = uri("https://maven.pkg.jetbrains.space/public/p/ktor/eap") }
}

dependencies {
	implementation("io.ktor:ktor-server-core:$ktor_version")
	implementation("io.ktor:ktor-server-content-negotiation:$ktor_version")
	implementation("io.ktor:ktor-serialization-kotlinx-json:$ktor_version")
	implementation("io.ktor:ktor-server-netty:$ktor_version")
	implementation("io.ktor:ktor-server-cors-jvm:$ktor_version")
	implementation("ch.qos.logback:logback-classic:$logback_version")
	implementation("org.postgresql:postgresql:42.3.1")
	testImplementation("io.ktor:ktor-server-tests:$ktor_version")
	testImplementation("org.jetbrains.kotlin:kotlin-test-junit:$kotlin_version")
}

tasks.create("stage") {
	dependsOn("installDist")
}