import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, Modal, TextInput, ScrollView } from "react-native";

const Homepage = () => {
  const [rentedCar, setRentedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setRentedCar({
        id: "123",
        model: "Porsche 911 Turbo S",
        licensePlate: "XYZ 987",
        rentalPeriod: "3 days",
        image: require("../assets/CarImage.jpg"),
      });
      setLoading(false);
    }, 1000);
  }, []);

  const openChatModal = () => {
    setModalVisible(true);
  };

  const closeChatModal = () => {
    setModalVisible(false);
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Loading rented car...</Text>
      </View>
    );
  }

  if (!rentedCar) {
    return (
      <View style={styles.centered}>
        <Text>No car currently rented</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contractCard}>
        <Text style={styles.sectionTitle}>Current Contract</Text>
        <Image source={rentedCar.image} style={styles.carImage} />
        <Text style={styles.carModel}>{rentedCar.model}</Text>
        <Text style={styles.licensePlate}>License: {rentedCar.licensePlate}</Text>
        <Text style={styles.rentalPeriod}>Rental Period: {rentedCar.rentalPeriod}</Text>

        <TouchableOpacity style={styles.helpButton} onPress={openChatModal}>
          <Text style={styles.buttonText}>Ask Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.endButton}>
          <Text style={styles.endButtonText}>End Contract</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeChatModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.chatWindow}>
            <Text style={styles.chatHeader}>Customer Support</Text>
            <ScrollView style={styles.messagesContainer}>
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>Hi! How can I assist you today?</Text>
              </View>
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Type your message..."
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={closeChatModal}>
              <Text style={styles.closeButtonText}>Close Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  contractCard: {
    marginTop: 50,
    width: "95%",
    minHeight: 380,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#cc0000", 
    borderLeftWidth:5,
    shadowColor: "#4d0000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 7,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  carImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
  carModel: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    color: "#222",
    marginBottom: 5,
  },
  licensePlate: {
    fontSize: 16,
    color: "#555",
    textAlign: "left",
    marginBottom: 5,
  },
  rentalPeriod: {
    fontSize: 16,
    color: "#777",
    textAlign: "left",
  },
  helpButton: {
    marginTop: 10,
    paddingVertical: 12,
    width: "100%",
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  endButton: {
    marginTop: 10,
    paddingVertical: 12,
    width: "100%",
    backgroundColor: "#DC3545",
    borderRadius: 8,
    alignItems: "center",
  },
  endButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  chatWindow: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 300,
  },
  chatHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  messagesContainer: {
    maxHeight: 200,
    marginBottom: 15,
  },
  messageBubble: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 15,
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f1f3f5",
    borderRadius: 15,
    marginRight: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 15,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: "#DC3545",
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Homepage;
